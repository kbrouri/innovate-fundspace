import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

type ProjectFormData = {
  title: string;
  category: string;
  shortDescription: string;
  fundingGoal: number;
  duration: string;
  story: string;
  risks: string;
};

const SubmitProject = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm<ProjectFormData>();

  const onSubmit = (data: ProjectFormData) => {
    console.log("Form submitted:", data);
    toast.success("Projet soumis avec succès!");
    // Ici nous ajouterons plus tard la logique pour envoyer les données à l'API
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Créer votre projet</h1>
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-1/3 h-2 rounded ${
                  step <= currentStep ? "bg-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titre du projet</FormLabel>
                      <FormControl>
                        <Input placeholder="Mon super projet" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Catégorie</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez une catégorie" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="tech">Technologie</SelectItem>
                          <SelectItem value="artisanat">Artisanat</SelectItem>
                          <SelectItem value="energie">
                            Énergies Renouvelables
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="shortDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description courte</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Décrivez votre projet en quelques phrases"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="fundingGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Objectif de financement (DA)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="100000"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Durée de la campagne</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez une durée" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="30">30 jours</SelectItem>
                          <SelectItem value="60">60 jours</SelectItem>
                          <SelectItem value="90">90 jours</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="story"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Histoire du projet</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Racontez l'histoire de votre projet en détail"
                          className="min-h-[200px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="risks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Risques et défis</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Quels sont les risques et défis potentiels ?"
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Précédent
                </Button>
              )}
              {currentStep < 3 ? (
                <Button type="button" onClick={nextStep} className="ml-auto">
                  Suivant
                </Button>
              ) : (
                <Button type="submit" className="ml-auto">
                  Soumettre le projet
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SubmitProject;