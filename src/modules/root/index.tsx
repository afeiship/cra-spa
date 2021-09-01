import { renderRoutes } from 'react-router-config';

export const Root = (props) => {
  const { route } = props;
  return (
    <View wh100 ovh>
      {renderRoutes(route.routes)}
    </View>
  );
};
