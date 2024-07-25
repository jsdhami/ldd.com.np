import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import React from 'react'

const fileCard = () => {
  return (
    <>
     <Card className="w-[300px] mt-2 shadow-md transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-105 duration-300">
     <CardHeader>
        <CardTitle className="truncate">BSc. Research Article</CardTitle>
        <CardDescription className="truncate">Structural, electronic, and optical properties of cubic perovskites BiMO3.</CardDescription>
      </CardHeader>
      <CardContent className="justify-center items-center">
      <Image src="/Tri-Chandra Research Group.png" alt="notes" width={500} height={500} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline"><Link href="/notes">View</Link></Button>
        <Button className="bg-slate-700">Download</Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default fileCard