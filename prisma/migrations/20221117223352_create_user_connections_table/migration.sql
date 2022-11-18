-- CreateTable
CREATE TABLE "UserConnections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "browser" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "ip" TEXT NOT NULL
);
