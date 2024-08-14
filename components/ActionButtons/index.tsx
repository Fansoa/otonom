import { useMealworm } from "@/app/(protected)/modules/mealworm/contexts/MealwormContext/index.tsx";

const ActionButtons = () => {
  const toto = useMealworm();
  // console.log("🚀 ~ ActionButtons ~ toto:", toto);
  // ActionButtons est un composant contenant les différents boutons permettant d'intéragir avec
  // un rack ou un crate
  // Les actions sont différentes en fonction que ce soit un rack ou un crate séléctionné
  // Lorsqu'un utilisateur à cliqué sur un crate, ActionsButtons affiche les éléments suivants:
  // - Un bouton permettant d'assigner le stage du crate
  // - Un bouton permettant d'ajouter une action de nourissage du crate
  // - Un bouton permettant d'ajouter une action de nettoyage
  // - Un bouton permettant d'ajouter une action de récole
  return <div>ActionButtons</div>;
};

export default ActionButtons;
