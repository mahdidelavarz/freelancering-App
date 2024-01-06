import { useQuery } from "@tanstack/react-query";
import { getAllProjectsApi } from "../../services/projectService";

export default function useAllProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["All-projects"],
    queryFn: getAllProjectsApi,
  });

  const { projects } = data || {};
  return { isLoading, projects };
}
