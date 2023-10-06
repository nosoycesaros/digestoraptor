import { Funnel } from "@/app/lib/types";

type FileLoaderType = {
    onFileChange: (parsedData: Funnel) => void;
}

const FileLoader = ({ onFileChange }: FileLoaderType) => {

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        const file = input.files?.[0];
    
        if (file) {
            try {
                const fileContent = await readFile(file);
                const parsedData = JSON.parse(fileContent as string);
                onFileChange(parsedData);
            } catch (error) {
                console.error('Error reading or parsing the JSON file:', error);
            }
        }
    };

    const readFile = (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target?.result);
            };

            reader.onerror = (event) => {
                reject(event.target?.error);
            };

            reader.readAsText(file);
        });
    };

    return (
        <input
            className='mb-3 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-700 file:text-indigo-50 hover:file:bg-indigo-600 transition-colors w-[250px]'
            type="file"
            id="funnel"
            name="funnel"
            accept=".json"
            onChange={handleFileChange}
        />
    )
}

export default FileLoader