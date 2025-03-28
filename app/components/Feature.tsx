import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Daily Task System ⏳",
    description: "Tasks expire at midnight to keep you accountable every day.",
  },
  {
    title: "Consistency Heatmap 🔥",
    description: "See your streaks like GitHub's heatmap and stay motivated.",
  },
  {
    title: "Leaderboard & Profiles 🏆",
    description: "Compete with others and flex your consistency stats.",
  },
  {
    title: "Smart Ratings & Rewards 🎯",
    description: "Get rewarded for staying consistent and leveling up!",
  },
];

export default function WhyRizze() {
  return (
    <div className="py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Why Rizze? 🤔
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card className="hover:shadow-xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">{feature.description}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
