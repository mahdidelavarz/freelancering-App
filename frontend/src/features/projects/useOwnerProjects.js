import {useQuery} from "@tanstack/react-query";
import { getOwnerProjectApi } from "../../services/projectService";

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectApi,
  });

  const { projects } = data || {};
  console.log(data)
  return { isLoading, projects };
}
