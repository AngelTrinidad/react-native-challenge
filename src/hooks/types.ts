export type RequestHook<T = unknown> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
};
