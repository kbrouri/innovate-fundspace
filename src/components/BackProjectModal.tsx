import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface BackProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

const BackProjectModal = ({ isOpen, onClose, projectTitle }: BackProjectModalProps) => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      toast.error("Veuillez sélectionner un mode de paiement");
      return;
    }

    // Ici nous ajouterons plus tard la logique de paiement
    toast.success(`Merci pour votre soutien ! Vous serez redirigé vers ${paymentMethod} pour finaliser le paiement.`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Soutenir ce projet</DialogTitle>
          <DialogDescription>
            Vous allez soutenir le projet : {projectTitle}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount">Montant (DA)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="5000"
              min="1"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="payment-method">Mode de paiement</Label>
            <Select
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              required
            >
              <SelectTrigger id="payment-method">
                <SelectValue placeholder="Sélectionnez un mode de paiement" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cib">
                  Carte CIB
                </SelectItem>
                <SelectItem value="dahabiya">
                  Carte Dahabiya
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {paymentMethod && (
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                {paymentMethod === 'cib' ? 
                  "Vous serez redirigé vers la plateforme de paiement CIB pour finaliser votre transaction en toute sécurité." :
                  "Vous serez redirigé vers la plateforme Dahabiya pour finaliser votre transaction en toute sécurité."}
              </p>
            </div>
          )}

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose} type="button">
              Annuler
            </Button>
            <Button type="submit">
              Confirmer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BackProjectModal;