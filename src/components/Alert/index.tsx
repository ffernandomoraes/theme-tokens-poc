import styled from '@emotion/styled';
import IStylesProps from 'interface/styles';

interface IAlertProps extends IStylesProps {
  variant?: 'info' | 'error' | 'success';
}

function Alert({ className, variant = 'info' }: IAlertProps) {
  return (
    <div className={`${className} ${variant ? `--${variant}` : ''}`}>
      <div className='title'>Atenção!</div>
      <div className='content'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci minus deserunt a? Eius delectus culpa
        mollitia sint facilis amet praesentium beatae quae. Saepe exercitationem, itaque alias voluptatibus fugit
        repudiandae magni?
      </div>
    </div>
  );
}

export default styled(Alert)`
  padding: 15px 20px;
  border-radius: 4px;
  font-size: 14px;
  background: #fff;
  display: block;
  margin-top: 20px;

  .title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &.--info {
    background: #1769aa;
    color: white;
  }

  &.--error {
    background: #b2102f;
    color: white;
  }

  &.--success {
    background: #00a152;
    color: white;
  }
`;
