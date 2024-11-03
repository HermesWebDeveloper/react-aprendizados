import Header from "../../Header";
import HeaderReact from "./HeaderReact";
import UseEffect from "./Section1/useEffect";


function ReactPage() {

    return(
        <>
            <div className="bg-slate-800 py-10 px-20 h-[2000px]">
                <div className="bg-gray-200 text-slate-800 py-5 px-10">
                    <HeaderReact />
                    <hr className="border-t-2 border-gray-400"></hr>
                    <section>
                        <UseEffect />
                    </section>
                </div>
            </div>
        </>
    )
}

export default ReactPage;