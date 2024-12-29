import { Progress } from "@/components/ui/progress";

interface ProjectProgressProps {
  current: number;
  goal: number;
  daysLeft: number;
  backersCount: number;
}

const ProjectProgress = ({ current, goal, daysLeft, backersCount }: ProjectProgressProps) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div className="space-y-4">
      <Progress value={percentage} className="h-3" />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-2xl font-bold">{current.toLocaleString()} DA</div>
          <div className="text-sm text-gray-500">sur {goal.toLocaleString()} DA</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{backersCount}</div>
          <div className="text-sm text-gray-500">contributeurs</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{daysLeft}</div>
          <div className="text-sm text-gray-500">jours restants</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;