import { View } from "react-native";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  return (
    <View>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} item={project} />
      ))}
    </View>
  );
}
