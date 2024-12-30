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
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      toast.error("Veuillez sélectionner un mode de paiement");
      return;
    }

    if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
      toast.error("Veuillez remplir tous les champs de la carte");
      return;
    }

    // Validation basique du numéro de carte
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      toast.error("Le numéro de carte doit contenir 16 chiffres");
      return;
    }

    // Validation du CVV
    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
      toast.error("Le CVV doit contenir 3 chiffres");
      return;
    }

    // Validation de la date d'expiration (format MM/YY)
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      toast.error("La date d'expiration doit être au format MM/YY");
      return;
    }

    // Ici nous ajouterons plus tard la logique de paiement
    toast.success(`Merci pour votre soutien ! La transaction avec ${paymentMethod} sera traitée.`);
    onClose();
  };

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.slice(0, 16);
  };

  const formatExpiryDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 2) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
    }
    return numbers;
  };

  const formatCVV = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.slice(0, 3);
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
                <SelectItem value="cib">Carte CIB</SelectItem>
                <SelectItem value="dahabiya">Carte Dahabiya</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {paymentMethod && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-holder">Nom sur la carte</Label>
                <Input
                  id="card-holder"
                  type="text"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  placeholder="MOHAMED AMINE"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="card-number">Numéro de carte</Label>
                <Input
                  id="card-number"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder="1234567890123456"
                  maxLength={16}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Date d'expiration</Label>
                  <Input
                    id="expiry"
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(formatCVV(e.target.value))}
                    placeholder="123"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              {paymentMethod === 'cib' ? 
                "Vous allez effectuer un paiement sécurisé avec votre carte CIB." :
                paymentMethod === 'dahabiya' ?
                "Vous allez effectuer un paiement sécurisé avec votre carte Dahabiya." :
                "Veuillez sélectionner un mode de paiement pour continuer."}
            </p>
          </div>

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