import { useEffect, useState } from "react";

function App () {
    const [datas, setDatas] = useState({})
    const [ayats, setAyats] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const Fapi = async () => {
            try {
                const res = await fetch('https://equran.id/api/surat/112');
                if(!res.ok){
                    throw new Error(`HTTP error!, status: ${res.status}` )
                }
                const result = await res.json();
                setDatas(result)
                setAyats(result.ayat)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        Fapi();
    }, []);
    console.log(ayats)

    if(loading) return <p>sedang memuat data...</p>;
    if(error) return <p>Terjadi kesalahan: {error.message}</p>;

    return(
        <>
            <div>
                <h1>{datas.nama_latin}</h1>
                <ol>
                    {ayats?.map((ayat) => (
                    <li key={ayat.nomor}>
                      {ayat.ar}
                    </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default App