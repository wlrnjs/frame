import { postWrite, PostWritePayload } from "@/service/lib/write/postWrite"
import { useMutation } from "@tanstack/react-query"

export const usePostWrite = () => {
  return useMutation({
    mutationFn: (payload: PostWritePayload) => postWrite(payload),
  })
}