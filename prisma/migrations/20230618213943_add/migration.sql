-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Untitled',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "frameFill" TEXT NOT NULL DEFAULT 'gradient-1',
    "frameFillType" TEXT NOT NULL DEFAULT 'gradient',
    "frameOpacity" DOUBLE PRECISION NOT NULL DEFAULT 100,
    "framePaddingType" TEXT NOT NULL DEFAULT '64',
    "framePaddingHorizontal" INTEGER NOT NULL DEFAULT 64,
    "framePaddingVertical" INTEGER NOT NULL DEFAULT 64,
    "frameVisible" BOOLEAN NOT NULL DEFAULT true,
    "windowBorderRadius" INTEGER NOT NULL DEFAULT 12,
    "windowControlsType" TEXT NOT NULL DEFAULT 'macos-filled-color',
    "windowHeaderVisible" BOOLEAN NOT NULL DEFAULT true,
    "windowReflection" BOOLEAN NOT NULL DEFAULT false,
    "windowShadow" TEXT NOT NULL DEFAULT 'bottom',
    "windowTabAccent" BOOLEAN NOT NULL DEFAULT true,
    "windowTabContent" TEXT NOT NULL DEFAULT '',
    "windowTabVisible" BOOLEAN NOT NULL DEFAULT true,
    "windowTabIconVisible" BOOLEAN NOT NULL DEFAULT true,
    "windowTabIconSize" INTEGER NOT NULL DEFAULT 20,
    "windowWatermark" BOOLEAN NOT NULL DEFAULT true,
    "editorCode" TEXT NOT NULL DEFAULT '',
    "editorLanguage" TEXT NOT NULL DEFAULT 'tsx',
    "editorLineNumbers" BOOLEAN NOT NULL DEFAULT true,
    "editorTheme" TEXT NOT NULL DEFAULT 'one-dark-pro',
    "fontBolds" BOOLEAN NOT NULL DEFAULT true,
    "fontFamily" TEXT NOT NULL DEFAULT 'fira-code',
    "fontItalics" BOOLEAN NOT NULL DEFAULT true,
    "fontLetterSpacing" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fontLigatures" BOOLEAN NOT NULL DEFAULT true,
    "fontLineHeight" INTEGER NOT NULL DEFAULT 133,
    "fontSize" INTEGER NOT NULL DEFAULT 14,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Project_name_ownerId_idx" ON "Project"("name", "ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_ownerId_key" ON "Project"("id", "ownerId");
