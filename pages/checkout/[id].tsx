import { OrderSheetDataType } from "@customTypes/checkout";
import { CheckoutService } from "@services";

interface PropsType {
  data: OrderSheetDataType;
}

export default function CheckoutPage({ data }: PropsType) {
  console.log(data);
  return <></>;
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const cookie = context.req?.headers.cookie;

  return {
    props: { data: await CheckoutService.getOrderSheetInSSR(id, cookie) },
  };
}
