import { Button } from "@/components/ui/button"
import Image from "next/image";
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
     <Card className="w-[350px]">
     <CardHeader>
        <CardTitle>Add Notes/Solution</CardTitle>
        <CardDescription>Add your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent className="justify-center items-center">
      <Image src="/Tri-Chandra Research Group.png" alt="notes" width={500} height={500} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View</Button>
        <Button>Download</Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default fileCard