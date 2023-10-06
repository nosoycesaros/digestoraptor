type ListBlockItemType = {
    index: string;
    title: string;
    description: string;
    src: string;
}

export type ListBlockType = {
    items: [ListBlockItemType]
}

const ListBlock = ({ items }: ListBlockType) => (
    <ul>
        {items.map((item, index) => (
            <li key={index} className="flex flex-row gap-3 py-5 px-3 mb-5 w-full shadow-sm rounded-md transition-transform transform-gpu hover:-translate-x-1">
                <img className="w-[40px]" src={item.src} alt={item.title} />
                <div>
                    <h3 className="text-lg font-medium text-gray-800 text-left">{item.title}</h3>
                    <p className="text-xs text-gray-400 text-left">{item.description}</p>
                </div>
            </li>
        ))}
    </ul>
);

export default ListBlock