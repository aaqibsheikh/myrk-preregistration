import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle, Share2, Puzzle, Users } from "lucide-react";

export const FrozenVaultSection = (): JSX.Element => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const tasks = [
    {
      id: "signup",
      title: "Join the Awakening",
      description: "Create your account and step into the world of MYRK",
      icon: <Users className="w-6 h-6" />,
      completed: false,
    },
    {
      id: "share",
      title: "Spread the Word",
      description: "Share MYRK with fellow adventurers",
      icon: <Share2 className="w-6 h-6" />,
      completed: false,
    },
    {
      id: "puzzle",
      title: "Solve the Ancient Riddle",
      description: "Decode the mystery of the First Collapse",
      icon: <Puzzle className="w-6 h-6" />,
      completed: false,
    },
  ];

  const rewards = [
    {
      title: "Exclusive Wallpapers",
      description: "High-resolution artwork from the world of MYRK",
      image: "/figmaAssets/frame-12.svg",
      unlocked: false,
    },
    {
      title: "Soundtrack Preview",
      description: "Epic orchestral music from the game",
      image: "/figmaAssets/frame-15.svg",
      unlocked: false,
    },
    {
      title: "Secret Lore Archive",
      description: "Hidden stories and character backgrounds",
      image: "/figmaAssets/group.png",
      unlocked: false,
    },
    {
      title: "Early Access Cosmetics",
      description: "Exclusive character skins and equipment",
      image: "/figmaAssets/frame-12.svg",
      unlocked: false,
    },
  ];

  const handleTaskComplete = (taskId: string) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId]);
    }
  };

  return (
    <section className="w-full section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#edc84f] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#c79c27] rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="content-max-width container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-white mb-6">
            The Frozen Vault
          </h2>
          <p className="text-body text-gray-400 max-w-2xl mx-auto">
            Ancient treasures await those who prove their worth. Complete sacred tasks to unlock exclusive rewards and delve deeper into the mysteries of MYRK.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Tasks Section */}
          <div className="space-y-6">
            <h3 className="heading-tertiary text-white mb-8 text-center lg:text-left">
              Sacred Tasks
            </h3>
            
            {tasks.map((task, index) => (
              <Card
                key={task.id}
                className="card-interactive bg-[#ffffff08] border-[#ffffff15] hover:border-[#edc84f40]"
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="icon-container">
                      {completedTasks.includes(task.id) ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <div className="text-black">{task.icon}</div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">
                        {task.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {task.description}
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleTaskComplete(task.id)}
                    disabled={completedTasks.includes(task.id)}
                    className="btn-primary"
                  >
                    {completedTasks.includes(task.id) ? "Complete" : "Begin"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rewards Section */}
          <div className="space-y-6">
            <h3 className="heading-tertiary text-white mb-8 text-center lg:text-left">
              Vault Rewards
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rewards.map((reward, index) => (
                <Card
                  key={index}
                  className={`card-interactive ${
                    reward.unlocked || completedTasks.length > index
                      ? "bg-[#ffffff15] border-[#edc84f40]"
                      : "bg-[#ffffff05] border-[#ffffff08] opacity-60"
                  }`}
                >
                  <CardContent className="p-4 text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-[#ffffff1a] flex items-center justify-center">
                        {reward.unlocked || completedTasks.length > index ? (
                          <img
                            src={reward.image}
                            alt={reward.title}
                            className="w-8 h-8"
                          />
                        ) : (
                          <Lock className="w-8 h-8 text-gray-500" />
                        )}
                      </div>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-2">
                      {reward.title}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {reward.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-body text-gray-400">
            Progress: {completedTasks.length} of {tasks.length} tasks completed
          </p>
          <div className="w-full max-w-md mx-auto mt-4 h-2 bg-[#ffffff1a] rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-[#edc84f] to-[#c79c27] rounded-full transition-all duration-500"
              style={{ width: `${(completedTasks.length / tasks.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};