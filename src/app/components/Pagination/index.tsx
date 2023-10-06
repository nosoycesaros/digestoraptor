import { useFunnelStore } from "@/app/lib/store"

type PaginationType = {
    onChange: (index: number) => void
}

const Pagination = ({ onChange }: PaginationType) => {
    const funnel = useFunnelStore((state) => state.funnel)

    return (
        <ol
            className="flex flex-row mt-6"
        >
            {funnel.pages.map((_, index: number) => (
                <li
                    key={index}
                    className="mr-5 bg-black rounded-full h-[10px] w-[10px] hover:bg-indigo-700 cursor-pointer transition-colors"
                    onClick={() => onChange(index)}
                ></li>
            ))}
        </ol>
    )
}

export default Pagination