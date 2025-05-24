import prisma from "@/repo/prisma";
import { getAllBooks } from '../ui/Card.js';

export default function Home() {
  return (
    <>
      <div>
        <getAllBooks />
      </div>
    </>
  );
}
