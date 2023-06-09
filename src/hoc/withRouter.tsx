import { useLocation, useNavigate } from "@builder.io/qwik-city";


const withRouter = (WrappedComponent: any) => (props: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <WrappedComponent
      {...props}
      location={location}
      navigate={navigate}
    />
  );
};

export default withRouter;
