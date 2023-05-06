'use client';

import { api } from "~/utils/api";

export const MyComponent = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data, isLoading } = api.example.test.useQuery();

  if (!isLoading) console.log(data)

  return (
    <p>This is my component</p>
  )
}
