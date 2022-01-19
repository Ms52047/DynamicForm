/**
 * title: 基础 coverRadio
 * desc: 表单使用 demo
 */

import React from 'react';
import { Button } from 'antd-mobile-v2';
import DynamicForm, {
  useForm,
  Store,
  ValidateErrorEntity,
  CoverRadio,
  WhiteSpace,
} from '@alitajs/dform';

const sexList = [
  { sexName: '男', sexId: 'man' },
  { sexName: '女', sexId: 'woman' },
];

const foodList = [
  {
    label: '宫保鸡丁',
    value: '宫保鸡丁',
  },
  {
    label: '可乐鸡翅',
    value: '可乐鸡翅',
  },
  {
    label: '爆炒虾仁',
    value: '爆炒虾仁',
  },
  {
    label: '清蒸小黄鱼',
    value: '清蒸小黄鱼',
  },
  {
    label: '红烧肉',
    value: '红烧肉',
  },
];

const Page = () => {
  const [form] = useForm();
  const onFinish = (values: Store) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const formsValues = {
    sex: 'man',
  };

  const formProps = {
    onFinish,
    onFinishFailed,
    formsValues,
    form,
    isDev: false,
  };

  return (
    <>
      <DynamicForm {...formProps}>
        <CoverRadio
          fieldProps="sex"
          data={sexList}
          title="性别"
          required
          onChange={(val: any) => {
            // eslint-disable-next-line no-console
            console.log(val);
          }}
          alias={{
            label: 'sexName',
            value: 'sexId',
          }}
        />
        <CoverRadio
          fieldProps="sex2"
          data={sexList}
          title="选择您的性别(默认值)"
          positionType="vertical"
          alias={{
            label: 'sexName',
            value: 'sexId',
          }}
          disabled
          defaultValue="woman"
        />
        <CoverRadio
          fieldProps="food"
          data={foodList}
          title="喜欢的食物"
          required={true}
          positionType="vertical"
          radioType="vertical"
        />
      </DynamicForm>
      <WhiteSpace size="sm" />
      <Button type="primary" onClick={() => form.submit()}>
        Submit
      </Button>
    </>
  );
};

export default Page;
