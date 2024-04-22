import { TableComponent } from "@/app/components/TableComponent";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

export default function Page() {
  return (
    <div>
      <TableComponent />
      <div className={"p-5 flex justify-center"}>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="yellow" variant={"soft"}>
              Revoke access
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content maxWidth="450px">
            <TableComponent />
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </div>
  );
}
