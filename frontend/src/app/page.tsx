import FormContent from "@/components/shared/form-content";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            <div className="flex flex-col gap-0.5">
              <h1 className="text-2xl font-bold">Code-Stream</h1>
              <p className="text-muted-foreground text-sm">
                Online Code Editor
              </p>
            </div>
          </div>
          <CardDescription className="pt-2">
            <p className="text-muted-foreground text-lg">
              Paste invitation RoomId or create a new room
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <FormContent />
        </CardContent>
      </Card>
    </div>
  );
}
