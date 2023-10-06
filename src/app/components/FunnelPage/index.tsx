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

const EmptyPage = () => (
    <div className="text-center p-8 bg-white h-full flex  flex-col align-center justify-center">
        <div className="text-5xl mb-5">
        😶‍🌫️
        </div>
        <h2 className="text-l mb-5">This page is <span className="font-mono font-bold">empty</span><br />It&apos;s data has vanished.</h2>
        <p className="text-sm text-gray-400	">Please add some information to this page using the correct format. Check our <a className="text-blue-300" href="/funnel.json">example code</a> for guidelines.</p>
    </div>
)

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

    if(!page?.id || !page?.blocks) {
        return <EmptyPage />
    }

    return (
        <div key={page.id} className="p-12 flex flex-col">
            {page?.blocks && page.blocks.map(RenderBlock)}
        </div>
    )
};

export default FunnelPage