import type { TextBlockType } from "@/app/components/TextBlock"
import type { ImageBlockType } from "@/app/components/ImageBlock"
import type { ListBlockType } from "@/app/components/ListBlock"
import type { ButtonBlockType } from "@/app/components/ButtonBlock"

export type Block = (TextBlockType | ImageBlockType | ListBlockType | ButtonBlockType) & {
    id: string;
    type: 'text' | 'image' | 'list' | 'button'
}

export type Page = {
    id: string;
    blocks: Array<Block>
}

export type Funnel = {
    name: string;
    bgColor: string;
    pages: Array<Page>;
}