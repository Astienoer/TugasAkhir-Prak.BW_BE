import express from "express";
import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

const app = express();

app.use(express.json());

const port = 5000;

app.get("/warga", async (req, res) => {
  try {
    const warga = await database.wargart.findMany();
    if (!warga) throw new Error("Data warga tidak di temukan");
    res.send(warga);
  } catch (err) {
    res.send({ status: 404, message: err.message });
  }
});

app.get("/warga/:id", async (req, res) => {
  try {
    const warga = await database.wargart.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!warga) throw new Error("Data warga tidak ada");

    res.send(warga);
  } catch (err) {
    res.send({ status: 404, message: err.message });
  }
});

app.post("/warga/create", async (req, res) => {
  try {
    const warga = await database.wargart.create({
      data: {
        nik: req.body.nik,
        nama: req.body.nama,
        jenisKelamin: req.body.jenisKelamin,
        status: req.body.status,
      },
    });
    res.send({ message: "Data warga berhasil ditambahkan", data: warga });
  } catch (err) {}
});

app.put("/warga/update/", async (req, res) => {
  try {
    const warga = await database.wargart.update({
      where: {
        id: req.body.id,
      },
      data: {
        nik: req.body.nik,
        nama: req.body.nama,
        jenisKelamin: req.body.jenisKelamin,
        status: req.body.status,
      },
    });
    res.send({ message: "Data warga Berhasil di perbaharui", data: warga });
  } catch (err) {}
});

app.delete("/warga/delete", async (req, res) => {
  await database.wargart.delete({
    where: {
      id: req.body.id,
    },
  });
  res.send({ message: "Data warga Berhasil di hapus" });
});

app.get("/", (req, res) => {
  res.send({ nama: "Astie" });
});

app.post("/create", (req, res) => {
  res.send({ nama: req.body });
});

app.listen(port, () => {
  console.log(`Aplikasi nya jalan di port ${port}`);
});