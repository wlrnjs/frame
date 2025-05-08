import { useMutation } from "@tanstack/react-query"
import { postWrite, PostWritePayload } from "../lib/write/postWrite"

export const usePostWrite = () => {
  return useMutation({
    mutationFn: (payload: PostWritePayload) => postWrite(payload),
  })
}