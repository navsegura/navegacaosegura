import { Loading, Loader, LoadingInitial, LoaderInitial, Logo } from './LoadingComponent.styles';
import PropTypes from 'prop-types';	
import { Images } from '../../assets/images';

const LoadingComponent = ({ isLoading }) => {
    return (
        <>
      {isLoading && (
        <Loading>
          <Loader src={Images.LogoLoading} alt="Carregando" />
        </Loading>
      )}
    </>
  );
};

export const LoadingComponentInitial = ({ isLoading }) => {
    return (
        <>
      {isLoading && (
        <LoadingInitial>
          <LoaderInitial src={Images.LogoLoading} alt="Carregando" />
          <Logo>NAVEGUARD</Logo>
        </LoadingInitial>
      )}
    </>
  );
};

LoadingComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

LoadingComponentInitial.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default LoadingComponent;
