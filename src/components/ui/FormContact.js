import React, { useState } from "react";
import styled, { css } from "styled-components";
import ModalAntd from "antd/lib/modal/Modal";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormUtils, useDevice } from "../../hooks";
import { Input } from "./Input";
import { Form } from "./Form";
import { defaultTo } from "lodash";
import { phoneCodes } from "../../data-list";
import { Select } from "./Select";
import { InputNumber } from "./InputNumber";
import { TextArea } from "./TextArea";
import { notification } from "./notification";
import { currentConfig } from "../../firebase";
import { Button } from "./Button";
import { useGlobal } from "reactn";

export const FormContact = () => {
  const [visibleFormContact, setVisibleFormContact] =
    useGlobal("visibleFormContact");

  const { isMobile } = useDevice();

  const [loadingContact, setLoadingContact] = useState(false);

  const handleVisibleFormContact = () =>
    setVisibleFormContact(!visibleFormContact);

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    countryCode: yup.string().required(),
    phoneNumber: yup.number().required(),
    issue: yup.string().required(),
    message: yup.string(),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { required, error } = useFormUtils({ errors, schema });

  const onSubmitFetchContacts = async (formData) => {
    try {
      setLoadingContact(true);
      const contact = mapContactData(formData);

      const response = await fetchSendEmail(contact);

      if (!response.ok) throw new Error(response.statusText);

      notification({ type: "success", title: "Enviado exitosamente" });

      return handleVisibleFormContact();
    } catch (e) {
      console.log("Error email send:", e);
      notification({ type: "error" });
    } finally {
      setLoadingContact(false);
    }
  };

  const fetchSendEmail = async (contact) =>
    await fetch(`${currentConfig.sendingEmailsApi}/cobiene/contact`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": null,
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(contact),
    });

  const mapContactData = (formData) => ({
    contact: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: {
        number: formData.phoneNumber,
        countryCode: formData.countryCode,
      },
      issue: formData.issue,
      message: formData.message,
      termsAndConditions: true,
      hostname: window.location.hostname || "cobiene",
    },
  });

  return (
    <ModalComponent
      title={<h3 style={{ margin: "0" }}>Contactanos</h3>}
      visible={visibleFormContact}
      onOk={() => handleVisibleFormContact()}
      onCancel={() => handleVisibleFormContact()}
      footer={null}
    >
      <Form onSubmit={handleSubmit(onSubmitFetchContacts)}>
        <Row gutter={[16, 15]}>
          <Col xs={24} sm={24} md={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese nombres"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese apellidos"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col span={24}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese email"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={10}>
            <Controller
              name="countryCode"
              control={control}
              defaultValue="+51"
              render={({ field: { onChange, value, name } }) => (
                <Select
                  label="Código"
                  value={value}
                  onChange={(value) => onChange(value)}
                  error={error(name)}
                  required={required(name)}
                  isMobile={isMobile}
                  options={phoneCodes.map((phoneCode) => ({
                    code: phoneCode.code,
                    value: phoneCode.dial_code,
                    label: `${phoneCode.name} (${phoneCode.dial_code})`,
                  }))}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={14}>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <InputNumber
                  label="Ingrese teléfono"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col span={24}>
            <Controller
              name="issue"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese asunto"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col span={24}>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <TextArea
                  label="Ingrese mensaje"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <Button
              type="tertiary"
              margin="0"
              block
              onClick={() => handleVisibleFormContact()}
              loading={loadingContact}
              disabled={loadingContact}
            >
              Cancelar
            </Button>
          </Col>
          <Col xs={24} sm={24} md={24} lg={16}>
            <Button
              type="primary"
              margin="0"
              block
              htmlType="submit"
              loading={loadingContact}
              disabled={loadingContact}
            >
              Enviar
            </Button>
          </Col>
        </Row>
      </Form>
    </ModalComponent>
  );
};

const ModalBackground = css`
  background-color: ${({ backgroundModal, theme }) =>
    defaultTo(backgroundModal, theme.colors.dark)};
  color: ${({ theme }) => theme.colors.font2};
`;

const ModalComponent = styled(ModalAntd)`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  top: 0;
  z-index: 9999999 !important;

  ${mediaQuery.minTablet} {
    min-width: inherit;
    min-height: inherit;
    width: inherit;
    height: auto;
    top: 2vh;
  }
  .ant-modal-content {
    position: absolute;
    inset: 0;
    ${ModalBackground};

    .ant-modal-header {
      ${ModalBackground};
      border-bottom: 1px solid #53575a;

      .ant-modal-title {
        color: ${({ theme }) => theme.colors.font1};
        h2 {
          margin: 0;
        }
      }
    }

    .ant-modal-close {
      color: ${({ theme }) => theme.colors.font1};
    }

    .ant-modal-body {
      ${ModalBackground};
    }
  }
`;
