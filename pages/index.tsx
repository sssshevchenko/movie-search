import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card } from 'react-bootstrap';
import Error from '@/components/Error';

const Index = () => {
  return (
    <MainLayout>
      <Error color='ligth' caption='Movie search website' />
    </MainLayout>
  );
};

export default Index;