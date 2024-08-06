'use client'
import React from "react";
import { Card, CardBody, Button, Slider } from "@nextui-org/react";

export default function Cards() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-custom-light dark:bg-custom-dark max-w-[610px]" // Cambia las clases aquí
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <video
              controls
              className="object-cover w-full h-[150px]" // Ajusta aquí el tamaño del video
              src="./Video-de-WhatsApp-2024-06-12-a-las-08.53.53_0689e0e9.webm"
              type="video/webm" // Especificar el tipo MIME
            >
              Tu navegador no soporta el elemento <code>video</code>.
            </video>
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Galvatecho</h3>
                <p className="text-small text-foreground/80">Multypanel</p>
                <h1 className="text-large font-medium mt-2">Calibres</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                defaultValue={33}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/20"
                radius="full"
                variant="light"
              >
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
