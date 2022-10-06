import { AddressbookPageLayout, AddressBox } from "@components/Addressbook";
import { AddressType } from "@customTypes/checkout";
import { CheckoutService } from "@services";

interface PropsType {
  addressId: number;
  data: AddressType[];
}

const AddressbookPage = ({ addressId, data }: PropsType) => {
  console.log(data);
  return (
    <AddressbookPageLayout>
      {data?.map((address) => (
        <AddressBox
          key={address.id}
          data={address}
          selected={addressId == address.id}
        />
      ))}
    </AddressbookPageLayout>
  );
};

export async function getServerSideProps(context: any) {
  const { addressId } = context.query;
  const cookie = context.req?.headers.cookie;

  return {
    props: {
      addressId: addressId,
      data: await CheckoutService.getAddressListInSSR(cookie),
    },
  };
}

export default AddressbookPage;
