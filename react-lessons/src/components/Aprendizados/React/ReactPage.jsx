import Header from "../../Header";
import HeaderReact from "./HeaderReact";
import UseEffect from "./Section1/useEffect";


function ReactPage() {

    return(
        <>
            <div className="bg-blue-900 py-10 px-20 h-[2000px]">
                <div className="bg-gray-100">
                    <HeaderReact />
                    <section>
                        <UseEffect />
                    </section>
                </div>
            </div>
        </>
    )
}

export default ReactPage;