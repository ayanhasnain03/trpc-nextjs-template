"use client";
import { trpc } from "../_trpc/client";

export default function TodoList (){
 const getTodos = trpc.getTodos.useQuery();
 return (
  <div>
   <div>{JSON.stringify(getTodos.data)}</div>
  </div>
 )
}
