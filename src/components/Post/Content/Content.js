// @flow strict
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']} style={{maxWidth:'100%'}}>{title}</h1>
    <div className={styles['content__body']} style={{maxWidth:'60rem'}} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
