import { useState } from "react"
import FunnelPage from "../FunnelPage"
import Pagination from "../Pagination"
import { Funnel } from "@/app/lib/types"

type FunnelType = {
    data: Funnel
}

const FunnelComponent = ({ data }: FunnelType) => {
    const [currentPage, setCurrentPage] = useState<number>(0)

    return (
        <>
            <h1 className="text-xl mb-8">{data.name}</h1>
            <div
                className="rounded-lg w-[375px] h-[600px] overflow-y-scroll shadow-2xl"
                style={{ backgroundColor: data.bgColor }}
            >
                <FunnelPage page={data.pages[currentPage]} />
            </div>
            <Pagination onChange={index => setCurrentPage(index)} />
        </>
    )
}

export default FunnelComponent