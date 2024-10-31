import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Listrev() {
    const [reservasi, setReservasi] = useState([]);

    
    useEffect(() => {
        axios.get("https://uts-if-3-b-2327250050-api.vercel.app/api/api/reservasi")
            .then((response) => {
                setReservasi(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);


    return (
        <>
            <h1>List Reservasi</h1>
            <NavLink to="/reservasi/create" className="btn btn-primary my-4 mx-2">Tambah Pengunjung</NavLink>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nama Hotel</th>
                        <th scope="col">Nama Pelanggan</th>
                        <th scope="col">Tanggal_reservasi</th>

                    </tr>
                </thead>
                <tbody>
                    {reservasi.length > 0 ? (
                        reservasi.map((data) => (
                            <tr key={data.id}>
                                <td>{data.nama_Hotel}</td>
                                <td>{data.nama_Pelanggan}</td>
                                <td>{data.tanggal_reservasi}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}
