import {
  useQuery as useQueryOrigin,
  useMutation as useMutationOrigin,
  QueryKey,
  QueryFunction,
  UseQueryResult,
  UseMutationOptions,
  UseQueryOptions,
  MutationFunction,
} from "react-query";

interface useQueryProps {
  queryKey: QueryKey;
  queryFn: QueryFunction;
  options?: UseQueryOptions;
}
export function useQuery({
  queryKey,
  queryFn,
  options,
}: useQueryProps): UseQueryResult {
  return useQueryOrigin(queryKey, queryFn, { ...options });
}

interface useMutationProps {
  mutationFn: MutationFunction;
  options?: UseMutationOptions;
}
export function useMutation({ mutationFn, options }: useMutationProps) {
  return useMutationOrigin(mutationFn, { ...options });
}
