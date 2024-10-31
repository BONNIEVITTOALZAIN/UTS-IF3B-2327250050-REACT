import React, { useState } from "react";
import axios from "axios";

export default function Create() {
    const [reservasi, setReservasi] = useState({
        nama_Hotel: "",
        nama_Pelanggan: "",
        tanggal_reservasi: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservasi({
            ...reservasi,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!reservasi.nama_Hotel || !reservasi.nama_Pelanggan || !reservasi.tanggal_reservasi) {
            setError("Semua field harus diisi.");
            return;
        }

        try {
            const response = await axios.post(
                "https://uts-if-3-b-2327250050-api.vercel.app/api/api/reservasi/create",
                reservasi
            );

            if (response.status === 201) {
                setSuccess("Berhasil menyimpan data");
                setReservasi({
                    nama_Hotel: "",
                    nama_Pelanggan: "",
                    tanggal_reservasi: "",
                });
            } else {
                setError("Gagal membuat reservasi");
            }
        } catch (e) {
            setError("Terjadi kesalahan saat membuat reservasi");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Tambah Reservasi</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nama_Hotel" className="form-label">Nama Hotel</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nama_Hotel"
                        name="nama_Hotel"
                        value={reservasi.nama_Hotel}
                        onChange={handleChange}
                        placeholder="Nama Hotel"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="nama_Pelanggan" className="form-label">Nama Pelanggan</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nama_Pelanggan"
                        name="nama_Pelanggan"
                        value={reservasi.nama_Pelanggan}
                        onChange={handleChange}
                        placeholder="Nama Pelanggan"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="tanggal_reservasi" className="form-label">Tanggal Reservasi</label>
                    <input
                        type="date"
                        className="form-control"
                        id="tanggal_reservasi"
                        name="tanggal_reservasi"
                        value={reservasi.tanggal_reservasi}
                        onChange={handleChange}
                        placeholder="Masukkan tanggal reservasi"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Tambah Reservasi
                </button>
            </form>
        </div>
    );
}
