import type { Page, Block } from "@/app/lib/types"
import TextBlock from "../TextBlock";
import ImageBlock from "../ImageBlock";
import ListBlock from "../ListBlock";
import ButtonBlock from "../ButtonBlock";

const BLOCK_COMPONENTS: Record<string, React.ComponentType<any>> = {
    text: TextBlock,
    image: ImageBlock,
    list: ListBlock,
    button: ButtonBlock,
};

type FunnelPageType = {
    page: Page
}

const FunnelPage = ({ page }: FunnelPageType) => {
    const RenderBlock = ({ type, ...props }: Block) => {
        const BlockComponent = BLOCK_COMPONENTS[type];

        if (!BlockComponent) {
            return null;
        }

        return (
        <div className="mb-5 text-center" key={props.id}>
            <BlockComponent {...props} />
        </div>)
    };

    return (
        <div key={page.id} className="p-12 flex flex-col">
            {page.blocks.map(RenderBlock)}
        </div>
    )
};

export default FunnelPage