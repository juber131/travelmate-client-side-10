
import { useEffect, useState } from "react";
import Card11 from "../pages/Card11";

const Card1 = () => {

    const [ban, setban] = useState([])

    useEffect(() => {

        fetch('https://travel-mate-server-kappa.vercel.app/sport')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const info = data.filter(item => item.country === 'Bangladesh')
                setban(info)

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {
                ban.map(data => <Card11 data={data}></Card11>)
            }
        </div>
    );
};

export default Card1;
