import * as React from "react"; 
// import { setInterval } from 'timers';

const Glucometer = () => {
    const [glucose, setGlucose] = React.useState(90.00);
    let timer: NodeJS.Timer;
    let date = new Date();

    React.useEffect(() => {
        clearInterval(timer);
        timer = setInterval(() => {
            let newGlucoseValue = 110 * Math.random() + 50;
            console.log("glucose xx: ", newGlucoseValue);
            setGlucose(newGlucoseValue);
        }, 3000);

    }, [])


    return(
        <article className="h-[500px] min-w-[360px] max-w-[400px] px-3">
            <div className="relative w-full h-full border-4 border-black rounded-[50px]">
                <div className="flex justify-between px-6 py-6">
                    <div className="font-bold">{date.toLocaleDateString("en-US")}</div>
                    <div className="w-8 h-4 rounded-full border-2 border-gray-500 battery">
                        <div className="energy-bar h-full bg-teal-500 rounded-l-full"></div>
                    </div>
                </div>
                <div className="bg-gray-800 text-white px-6 py-4 text-center text-lg font-semibold">Saludos Jenny</div>
                <div className="cool-render absolute w-2/3 text-center min-h-[100px] inset-x-1/2 -translate-x-1/2 inset-y-1/2 -translate-y-[70%] text-[70px] text-gray-600">
                    {glucose.toFixed(2)}
                </div>
                <div className="absolute top-[55%] w-full h-1/2 flex items-center justify-center">
                    <div className="rounded-full bg-teal-500 w-16 h-16 flex justify-center items-center">
                        <div className="w-8 h-8 rounded-full bg-black/50"></div>
                    </div>
                </div>
            </div>
        </article>
    )
};

export { Glucometer };