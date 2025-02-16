import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  CheckCircle,
  DownloadCloudIcon,
  Mail,
  MoreHorizontal,
  Pencil,
  Trash,
} from "lucide-react";
import Link from "next/link";

export default function InvoiceActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="secondary">
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator /> */}
        <DropdownMenuItem asChild>
          <Link href="">
            <Pencil className="size-4 mr-2" /> Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="">
            <DownloadCloudIcon className="size-4 mr-2" /> Download Invoice
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="">
            <Mail className="size-4 mr-2" /> Reminder Email
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="">
            <Trash className="size-4 mr-2" /> Delete
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="" className="text-green-500">
            <CheckCircle className="size-4 mr-2" /> Mark as Paid
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
