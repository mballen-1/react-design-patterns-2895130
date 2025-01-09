import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1234" resourceName={"product"}>
        <ProductInfo />
      </ResourceLoader>
      <ResourceLoader userId={456}>
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
