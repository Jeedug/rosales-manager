import { DialogClose } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcdn/Dialog";

export default function SettingsMenu({ children }) {
  return (
    <DialogContent enabled className="bg-white rounded-xl">
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
        <div className="flex flex-row gap-2 items-center justify-end py-2">
          <DialogClose asChild>
            <button className="border border-red-500 text-red-500  font-normal text-md py-1 px-5 rounded">
              Delete
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-4 rounded">
              Cancel
            </button>
          </DialogClose>
        </div>
      </DialogHeader>
    </DialogContent>
  );
}
