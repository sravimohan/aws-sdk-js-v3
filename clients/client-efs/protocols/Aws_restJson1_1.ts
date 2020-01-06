import {
  CreateFileSystemCommandInput,
  CreateFileSystemCommandOutput
} from "../commands/CreateFileSystemCommand";
import {
  CreateMountTargetCommandInput,
  CreateMountTargetCommandOutput
} from "../commands/CreateMountTargetCommand";
import {
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "../commands/CreateTagsCommand";
import {
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput
} from "../commands/DeleteFileSystemCommand";
import {
  DeleteMountTargetCommandInput,
  DeleteMountTargetCommandOutput
} from "../commands/DeleteMountTargetCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "../commands/DeleteTagsCommand";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput
} from "../commands/DescribeFileSystemsCommand";
import {
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput
} from "../commands/DescribeLifecycleConfigurationCommand";
import {
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput
} from "../commands/DescribeMountTargetSecurityGroupsCommand";
import {
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput
} from "../commands/DescribeMountTargetsCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "../commands/DescribeTagsCommand";
import {
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput
} from "../commands/ModifyMountTargetSecurityGroupsCommand";
import {
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput
} from "../commands/PutLifecycleConfigurationCommand";
import {
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput
} from "../commands/UpdateFileSystemCommand";
import {
  BadRequest,
  DependencyTimeout,
  FileSystemAlreadyExists,
  FileSystemDescription,
  FileSystemInUse,
  FileSystemLimitExceeded,
  FileSystemNotFound,
  FileSystemSize,
  IncorrectFileSystemLifeCycleState,
  IncorrectMountTargetState,
  InsufficientThroughputCapacity,
  InternalServerError,
  IpAddressInUse,
  LifecyclePolicy,
  MountTargetConflict,
  MountTargetDescription,
  MountTargetNotFound,
  NetworkInterfaceLimitExceeded,
  NoFreeAddressesInSubnet,
  SecurityGroupLimitExceeded,
  SecurityGroupNotFound,
  SubnetNotFound,
  Tag,
  ThroughputLimitExceeded,
  TooManyRequests,
  UnsupportedAvailabilityZone
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateFileSystemCommand(
  input: CreateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-02-01/file-systems";
  let body: any = {};
  const bodyParams: any = {};
  if (input.CreationToken !== undefined) {
    bodyParams["CreationToken"] = input.CreationToken;
  }
  if (input.Encrypted !== undefined) {
    bodyParams["Encrypted"] = input.Encrypted;
  }
  if (input.KmsKeyId !== undefined) {
    bodyParams["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.PerformanceMode !== undefined) {
    bodyParams["PerformanceMode"] = input.PerformanceMode;
  }
  if (input.ProvisionedThroughputInMibps !== undefined) {
    bodyParams["ProvisionedThroughputInMibps"] =
      input.ProvisionedThroughputInMibps;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  if (input.ThroughputMode !== undefined) {
    bodyParams["ThroughputMode"] = input.ThroughputMode;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateMountTargetCommand(
  input: CreateMountTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-02-01/mount-targets";
  let body: any = {};
  const bodyParams: any = {};
  if (input.FileSystemId !== undefined) {
    bodyParams["FileSystemId"] = input.FileSystemId;
  }
  if (input.IpAddress !== undefined) {
    bodyParams["IpAddress"] = input.IpAddress;
  }
  if (input.SecurityGroups !== undefined) {
    bodyParams["SecurityGroups"] = serializeAws_restJson1_1SecurityGroups(
      input.SecurityGroups,
      context
    );
  }
  if (input.SubnetId !== undefined) {
    bodyParams["SubnetId"] = input.SubnetId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateTagsCommand(
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-02-01/create-tags/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: any = input.FileSystemId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteFileSystemCommand(
  input: DeleteFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: any = input.FileSystemId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteMountTargetCommand(
  input: DeleteMountTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-02-01/mount-targets/{MountTargetId}";
  if (input.MountTargetId !== undefined) {
    const labelValue: any = input.MountTargetId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MountTargetId."
      );
    }
    resolvedPath = resolvedPath.replace("{MountTargetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: MountTargetId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteTagsCommand(
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-02-01/delete-tags/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: any = input.FileSystemId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_restJson1_1TagKeys(
      input.TagKeys,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeFileSystemsCommand(
  input: DescribeFileSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-02-01/file-systems";
  const query: any = {};
  if (input.CreationToken !== undefined) {
    query["CreationToken"] = input.CreationToken.toString();
  }
  if (input.FileSystemId !== undefined) {
    query["FileSystemId"] = input.FileSystemId.toString();
  }
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker.toString();
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeLifecycleConfigurationCommand(
  input: DescribeLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
  if (input.FileSystemId !== undefined) {
    const labelValue: any = input.FileSystemId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeMountTargetSecurityGroupsCommand(
  input: DescribeMountTargetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
  if (input.MountTargetId !== undefined) {
    const labelValue: any = input.MountTargetId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MountTargetId."
      );
    }
    resolvedPath = resolvedPath.replace("{MountTargetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: MountTargetId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeMountTargetsCommand(
  input: DescribeMountTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-02-01/mount-targets";
  const query: any = {};
  if (input.FileSystemId !== undefined) {
    query["FileSystemId"] = input.FileSystemId.toString();
  }
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker.toString();
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
  }
  if (input.MountTargetId !== undefined) {
    query["MountTargetId"] = input.MountTargetId.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeTagsCommand(
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-02-01/tags/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: any = input.FileSystemId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  const query: any = {};
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker.toString();
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ModifyMountTargetSecurityGroupsCommand(
  input: ModifyMountTargetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
  if (input.MountTargetId !== undefined) {
    const labelValue: any = input.MountTargetId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MountTargetId."
      );
    }
    resolvedPath = resolvedPath.replace("{MountTargetId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: MountTargetId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.SecurityGroups !== undefined) {
    bodyParams["SecurityGroups"] = serializeAws_restJson1_1SecurityGroups(
      input.SecurityGroups,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutLifecycleConfigurationCommand(
  input: PutLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
  if (input.FileSystemId !== undefined) {
    const labelValue: any = input.FileSystemId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.LifecyclePolicies !== undefined) {
    bodyParams["LifecyclePolicies"] = serializeAws_restJson1_1LifecyclePolicies(
      input.LifecyclePolicies,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateFileSystemCommand(
  input: UpdateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: any = input.FileSystemId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ProvisionedThroughputInMibps !== undefined) {
    bodyParams["ProvisionedThroughputInMibps"] =
      input.ProvisionedThroughputInMibps;
  }
  if (input.ThroughputMode !== undefined) {
    bodyParams["ThroughputMode"] = input.ThroughputMode;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateFileSystemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> {
  if (output.statusCode !== 201) {
    return deserializeAws_restJson1_1CreateFileSystemCommandError(
      output,
      context
    );
  }
  const contents: CreateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FileSystemDescription",
    CreationTime: undefined,
    CreationToken: undefined,
    Encrypted: undefined,
    FileSystemId: undefined,
    KmsKeyId: undefined,
    LifeCycleState: undefined,
    Name: undefined,
    NumberOfMountTargets: undefined,
    OwnerId: undefined,
    PerformanceMode: undefined,
    ProvisionedThroughputInMibps: undefined,
    SizeInBytes: undefined,
    Tags: undefined,
    ThroughputMode: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      data.CreationTime % 1 != 0
        ? Math.round(data.CreationTime * 1000)
        : data.CreationTime
    );
  }
  if (data.CreationToken !== undefined) {
    contents.CreationToken = data.CreationToken;
  }
  if (data.Encrypted !== undefined) {
    contents.Encrypted = data.Encrypted;
  }
  if (data.FileSystemId !== undefined) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.KmsKeyId !== undefined) {
    contents.KmsKeyId = data.KmsKeyId;
  }
  if (data.LifeCycleState !== undefined) {
    contents.LifeCycleState = data.LifeCycleState;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.NumberOfMountTargets !== undefined) {
    contents.NumberOfMountTargets = data.NumberOfMountTargets;
  }
  if (data.OwnerId !== undefined) {
    contents.OwnerId = data.OwnerId;
  }
  if (data.PerformanceMode !== undefined) {
    contents.PerformanceMode = data.PerformanceMode;
  }
  if (data.ProvisionedThroughputInMibps !== undefined) {
    contents.ProvisionedThroughputInMibps = data.ProvisionedThroughputInMibps;
  }
  if (data.SizeInBytes !== undefined) {
    contents.SizeInBytes = deserializeAws_restJson1_1FileSystemSize(
      data.SizeInBytes,
      context
    );
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  if (data.ThroughputMode !== undefined) {
    contents.ThroughputMode = data.ThroughputMode;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateFileSystemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemAlreadyExists":
    case "com.amazon.magnolio.api#FileSystemAlreadyExists":
      response = await deserializeAws_restJson1_1FileSystemAlreadyExistsResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemLimitExceeded":
    case "com.amazon.magnolio.api#FileSystemLimitExceeded":
      response = await deserializeAws_restJson1_1FileSystemLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientThroughputCapacity":
    case "com.amazon.magnolio.api#InsufficientThroughputCapacity":
      response = await deserializeAws_restJson1_1InsufficientThroughputCapacityResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ThroughputLimitExceeded":
    case "com.amazon.magnolio.api#ThroughputLimitExceeded":
      response = await deserializeAws_restJson1_1ThroughputLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateMountTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMountTargetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateMountTargetCommandError(
      output,
      context
    );
  }
  const contents: CreateMountTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "MountTargetDescription",
    FileSystemId: undefined,
    IpAddress: undefined,
    LifeCycleState: undefined,
    MountTargetId: undefined,
    NetworkInterfaceId: undefined,
    OwnerId: undefined,
    SubnetId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FileSystemId !== undefined) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.IpAddress !== undefined) {
    contents.IpAddress = data.IpAddress;
  }
  if (data.LifeCycleState !== undefined) {
    contents.LifeCycleState = data.LifeCycleState;
  }
  if (data.MountTargetId !== undefined) {
    contents.MountTargetId = data.MountTargetId;
  }
  if (data.NetworkInterfaceId !== undefined) {
    contents.NetworkInterfaceId = data.NetworkInterfaceId;
  }
  if (data.OwnerId !== undefined) {
    contents.OwnerId = data.OwnerId;
  }
  if (data.SubnetId !== undefined) {
    contents.SubnetId = data.SubnetId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateMountTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMountTargetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = await deserializeAws_restJson1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazon.magnolio.api#IncorrectFileSystemLifeCycleState":
      response = await deserializeAws_restJson1_1IncorrectFileSystemLifeCycleStateResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "IpAddressInUse":
    case "com.amazon.magnolio.api#IpAddressInUse":
      response = await deserializeAws_restJson1_1IpAddressInUseResponse(
        parsedOutput,
        context
      );
      break;
    case "MountTargetConflict":
    case "com.amazon.magnolio.api#MountTargetConflict":
      response = await deserializeAws_restJson1_1MountTargetConflictResponse(
        parsedOutput,
        context
      );
      break;
    case "NetworkInterfaceLimitExceeded":
    case "com.amazon.magnolio.api#NetworkInterfaceLimitExceeded":
      response = await deserializeAws_restJson1_1NetworkInterfaceLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "NoFreeAddressesInSubnet":
    case "com.amazon.magnolio.api#NoFreeAddressesInSubnet":
      response = await deserializeAws_restJson1_1NoFreeAddressesInSubnetResponse(
        parsedOutput,
        context
      );
      break;
    case "SecurityGroupLimitExceeded":
    case "com.amazon.magnolio.api#SecurityGroupLimitExceeded":
      response = await deserializeAws_restJson1_1SecurityGroupLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "SecurityGroupNotFound":
    case "com.amazon.magnolio.api#SecurityGroupNotFound":
      response = await deserializeAws_restJson1_1SecurityGroupNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetNotFound":
    case "com.amazon.magnolio.api#SubnetNotFound":
      response = await deserializeAws_restJson1_1SubnetNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAvailabilityZone":
    case "com.amazon.magnolio.api#UnsupportedAvailabilityZone":
      response = await deserializeAws_restJson1_1UnsupportedAvailabilityZoneResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1CreateTagsCommandError(output, context);
  }
  const contents: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = await deserializeAws_restJson1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteFileSystemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteFileSystemCommandError(
      output,
      context
    );
  }
  const contents: DeleteFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFileSystemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemInUse":
    case "com.amazon.magnolio.api#FileSystemInUse":
      response = await deserializeAws_restJson1_1FileSystemInUseResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = await deserializeAws_restJson1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteMountTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMountTargetCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteMountTargetCommandError(
      output,
      context
    );
  }
  const contents: DeleteMountTargetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteMountTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMountTargetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "DependencyTimeout":
    case "com.amazon.magnolio.api#DependencyTimeout":
      response = await deserializeAws_restJson1_1DependencyTimeoutResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "MountTargetNotFound":
    case "com.amazon.magnolio.api#MountTargetNotFound":
      response = await deserializeAws_restJson1_1MountTargetNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteTagsCommandError(output, context);
  }
  const contents: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = await deserializeAws_restJson1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeFileSystemsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeFileSystemsCommandError(
      output,
      context
    );
  }
  const contents: DescribeFileSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFileSystemsResponse",
    FileSystems: undefined,
    Marker: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FileSystems !== undefined) {
    contents.FileSystems = deserializeAws_restJson1_1FileSystemDescriptions(
      data.FileSystems,
      context
    );
  }
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  if (data.NextMarker !== undefined) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeFileSystemsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = await deserializeAws_restJson1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeLifecycleConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleConfigurationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeLifecycleConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DescribeLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LifecycleConfigurationDescription",
    LifecyclePolicies: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LifecyclePolicies !== undefined) {
    contents.LifecyclePolicies = deserializeAws_restJson1_1LifecyclePolicies(
      data.LifecyclePolicies,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeLifecycleConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleConfigurationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = await deserializeAws_restJson1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeMountTargetSecurityGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetSecurityGroupsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeMountTargetSecurityGroupsCommandError(
      output,
      context
    );
  }
  const contents: DescribeMountTargetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMountTargetSecurityGroupsResponse",
    SecurityGroups: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SecurityGroups !== undefined) {
    contents.SecurityGroups = deserializeAws_restJson1_1SecurityGroups(
      data.SecurityGroups,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeMountTargetSecurityGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetSecurityGroupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "IncorrectMountTargetState":
    case "com.amazon.magnolio.api#IncorrectMountTargetState":
      response = await deserializeAws_restJson1_1IncorrectMountTargetStateResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "MountTargetNotFound":
    case "com.amazon.magnolio.api#MountTargetNotFound":
      response = await deserializeAws_restJson1_1MountTargetNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeMountTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeMountTargetsCommandError(
      output,
      context
    );
  }
  const contents: DescribeMountTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMountTargetsResponse",
    Marker: undefined,
    MountTargets: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  if (data.MountTargets !== undefined) {
    contents.MountTargets = deserializeAws_restJson1_1MountTargetDescriptions(
      data.MountTargets,
      context
    );
  }
  if (data.NextMarker !== undefined) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeMountTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = await deserializeAws_restJson1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "MountTargetNotFound":
    case "com.amazon.magnolio.api#MountTargetNotFound":
      response = await deserializeAws_restJson1_1MountTargetNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeTagsCommandError(output, context);
  }
  const contents: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTagsResponse",
    Marker: undefined,
    NextMarker: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  if (data.NextMarker !== undefined) {
    contents.NextMarker = data.NextMarker;
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = await deserializeAws_restJson1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ModifyMountTargetSecurityGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyMountTargetSecurityGroupsCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1ModifyMountTargetSecurityGroupsCommandError(
      output,
      context
    );
  }
  const contents: ModifyMountTargetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ModifyMountTargetSecurityGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyMountTargetSecurityGroupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "IncorrectMountTargetState":
    case "com.amazon.magnolio.api#IncorrectMountTargetState":
      response = await deserializeAws_restJson1_1IncorrectMountTargetStateResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "MountTargetNotFound":
    case "com.amazon.magnolio.api#MountTargetNotFound":
      response = await deserializeAws_restJson1_1MountTargetNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "SecurityGroupLimitExceeded":
    case "com.amazon.magnolio.api#SecurityGroupLimitExceeded":
      response = await deserializeAws_restJson1_1SecurityGroupLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "SecurityGroupNotFound":
    case "com.amazon.magnolio.api#SecurityGroupNotFound":
      response = await deserializeAws_restJson1_1SecurityGroupNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PutLifecycleConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleConfigurationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PutLifecycleConfigurationCommandError(
      output,
      context
    );
  }
  const contents: PutLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LifecycleConfigurationDescription",
    LifecyclePolicies: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LifecyclePolicies !== undefined) {
    contents.LifecyclePolicies = deserializeAws_restJson1_1LifecyclePolicies(
      data.LifecyclePolicies,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutLifecycleConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleConfigurationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = await deserializeAws_restJson1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazon.magnolio.api#IncorrectFileSystemLifeCycleState":
      response = await deserializeAws_restJson1_1IncorrectFileSystemLifeCycleStateResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateFileSystemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> {
  if (output.statusCode !== 202) {
    return deserializeAws_restJson1_1UpdateFileSystemCommandError(
      output,
      context
    );
  }
  const contents: UpdateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FileSystemDescription",
    CreationTime: undefined,
    CreationToken: undefined,
    Encrypted: undefined,
    FileSystemId: undefined,
    KmsKeyId: undefined,
    LifeCycleState: undefined,
    Name: undefined,
    NumberOfMountTargets: undefined,
    OwnerId: undefined,
    PerformanceMode: undefined,
    ProvisionedThroughputInMibps: undefined,
    SizeInBytes: undefined,
    Tags: undefined,
    ThroughputMode: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      data.CreationTime % 1 != 0
        ? Math.round(data.CreationTime * 1000)
        : data.CreationTime
    );
  }
  if (data.CreationToken !== undefined) {
    contents.CreationToken = data.CreationToken;
  }
  if (data.Encrypted !== undefined) {
    contents.Encrypted = data.Encrypted;
  }
  if (data.FileSystemId !== undefined) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.KmsKeyId !== undefined) {
    contents.KmsKeyId = data.KmsKeyId;
  }
  if (data.LifeCycleState !== undefined) {
    contents.LifeCycleState = data.LifeCycleState;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.NumberOfMountTargets !== undefined) {
    contents.NumberOfMountTargets = data.NumberOfMountTargets;
  }
  if (data.OwnerId !== undefined) {
    contents.OwnerId = data.OwnerId;
  }
  if (data.PerformanceMode !== undefined) {
    contents.PerformanceMode = data.PerformanceMode;
  }
  if (data.ProvisionedThroughputInMibps !== undefined) {
    contents.ProvisionedThroughputInMibps = data.ProvisionedThroughputInMibps;
  }
  if (data.SizeInBytes !== undefined) {
    contents.SizeInBytes = deserializeAws_restJson1_1FileSystemSize(
      data.SizeInBytes,
      context
    );
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  if (data.ThroughputMode !== undefined) {
    contents.ThroughputMode = data.ThroughputMode;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFileSystemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = await deserializeAws_restJson1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = await deserializeAws_restJson1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazon.magnolio.api#IncorrectFileSystemLifeCycleState":
      response = await deserializeAws_restJson1_1IncorrectFileSystemLifeCycleStateResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientThroughputCapacity":
    case "com.amazon.magnolio.api#InsufficientThroughputCapacity":
      response = await deserializeAws_restJson1_1InsufficientThroughputCapacityResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ThroughputLimitExceeded":
    case "com.amazon.magnolio.api#ThroughputLimitExceeded":
      response = await deserializeAws_restJson1_1ThroughputLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequests":
    case "com.amazon.magnolio.api#TooManyRequests":
      response = await deserializeAws_restJson1_1TooManyRequestsResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.magnolio.api.v20150201#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1BadRequestResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequest> => {
  const contents: BadRequest = {
    __type: "BadRequest",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1DependencyTimeoutResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DependencyTimeout> => {
  const contents: DependencyTimeout = {
    __type: "DependencyTimeout",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1FileSystemAlreadyExistsResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FileSystemAlreadyExists> => {
  const contents: FileSystemAlreadyExists = {
    __type: "FileSystemAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    FileSystemId: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.FileSystemId !== undefined) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1FileSystemInUseResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FileSystemInUse> => {
  const contents: FileSystemInUse = {
    __type: "FileSystemInUse",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1FileSystemLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FileSystemLimitExceeded> => {
  const contents: FileSystemLimitExceeded = {
    __type: "FileSystemLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1FileSystemNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FileSystemNotFound> => {
  const contents: FileSystemNotFound = {
    __type: "FileSystemNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1IncorrectFileSystemLifeCycleStateResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IncorrectFileSystemLifeCycleState> => {
  const contents: IncorrectFileSystemLifeCycleState = {
    __type: "IncorrectFileSystemLifeCycleState",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1IncorrectMountTargetStateResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IncorrectMountTargetState> => {
  const contents: IncorrectMountTargetState = {
    __type: "IncorrectMountTargetState",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InsufficientThroughputCapacityResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InsufficientThroughputCapacity> => {
  const contents: InsufficientThroughputCapacity = {
    __type: "InsufficientThroughputCapacity",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const contents: InternalServerError = {
    __type: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1IpAddressInUseResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IpAddressInUse> => {
  const contents: IpAddressInUse = {
    __type: "IpAddressInUse",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1MountTargetConflictResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MountTargetConflict> => {
  const contents: MountTargetConflict = {
    __type: "MountTargetConflict",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1MountTargetNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MountTargetNotFound> => {
  const contents: MountTargetNotFound = {
    __type: "MountTargetNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1NetworkInterfaceLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NetworkInterfaceLimitExceeded> => {
  const contents: NetworkInterfaceLimitExceeded = {
    __type: "NetworkInterfaceLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1NoFreeAddressesInSubnetResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NoFreeAddressesInSubnet> => {
  const contents: NoFreeAddressesInSubnet = {
    __type: "NoFreeAddressesInSubnet",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityGroupLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SecurityGroupLimitExceeded> => {
  const contents: SecurityGroupLimitExceeded = {
    __type: "SecurityGroupLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityGroupNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SecurityGroupNotFound> => {
  const contents: SecurityGroupNotFound = {
    __type: "SecurityGroupNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1SubnetNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SubnetNotFound> => {
  const contents: SubnetNotFound = {
    __type: "SubnetNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThroughputLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThroughputLimitExceeded> => {
  const contents: ThroughputLimitExceeded = {
    __type: "ThroughputLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequests> => {
  const contents: TooManyRequests = {
    __type: "TooManyRequests",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedAvailabilityZoneResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedAvailabilityZone> => {
  const contents: UnsupportedAvailabilityZone = {
    __type: "UnsupportedAvailabilityZone",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = output.body;
  if (data.ErrorCode !== undefined) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1LifecyclePolicies = (
  input: Array<LifecyclePolicy>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1LifecyclePolicy(entry, context)
  );
};

const serializeAws_restJson1_1LifecyclePolicy = (
  input: LifecyclePolicy,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TransitionToIA !== undefined) {
    bodyParams["TransitionToIA"] = input.TransitionToIA;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SecurityGroups = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1FileSystemDescription = (
  output: any,
  context: __SerdeContext
): FileSystemDescription => {
  let contents: any = {
    __type: "FileSystemDescription",
    CreationTime: undefined,
    CreationToken: undefined,
    Encrypted: undefined,
    FileSystemId: undefined,
    KmsKeyId: undefined,
    LifeCycleState: undefined,
    Name: undefined,
    NumberOfMountTargets: undefined,
    OwnerId: undefined,
    PerformanceMode: undefined,
    ProvisionedThroughputInMibps: undefined,
    SizeInBytes: undefined,
    Tags: undefined,
    ThroughputMode: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.CreationToken !== undefined) {
    contents.CreationToken = output.CreationToken;
  }
  if (output.Encrypted !== undefined) {
    contents.Encrypted = output.Encrypted;
  }
  if (output.FileSystemId !== undefined) {
    contents.FileSystemId = output.FileSystemId;
  }
  if (output.KmsKeyId !== undefined) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (output.LifeCycleState !== undefined) {
    contents.LifeCycleState = output.LifeCycleState;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.NumberOfMountTargets !== undefined) {
    contents.NumberOfMountTargets = output.NumberOfMountTargets;
  }
  if (output.OwnerId !== undefined) {
    contents.OwnerId = output.OwnerId;
  }
  if (output.PerformanceMode !== undefined) {
    contents.PerformanceMode = output.PerformanceMode;
  }
  if (output.ProvisionedThroughputInMibps !== undefined) {
    contents.ProvisionedThroughputInMibps = output.ProvisionedThroughputInMibps;
  }
  if (output.SizeInBytes !== undefined) {
    contents.SizeInBytes = deserializeAws_restJson1_1FileSystemSize(
      output.SizeInBytes,
      context
    );
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.Tags, context);
  }
  if (output.ThroughputMode !== undefined) {
    contents.ThroughputMode = output.ThroughputMode;
  }
  return contents;
};

const deserializeAws_restJson1_1FileSystemDescriptions = (
  output: any,
  context: __SerdeContext
): Array<FileSystemDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FileSystemDescription(entry, context)
  );
};

const deserializeAws_restJson1_1FileSystemSize = (
  output: any,
  context: __SerdeContext
): FileSystemSize => {
  let contents: any = {
    __type: "FileSystemSize",
    Timestamp: undefined,
    Value: undefined,
    ValueInIA: undefined,
    ValueInStandard: undefined
  };
  if (output.Timestamp !== undefined) {
    contents.Timestamp = new Date(
      output.Timestamp % 1 != 0
        ? Math.round(output.Timestamp * 1000)
        : output.Timestamp
    );
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  if (output.ValueInIA !== undefined) {
    contents.ValueInIA = output.ValueInIA;
  }
  if (output.ValueInStandard !== undefined) {
    contents.ValueInStandard = output.ValueInStandard;
  }
  return contents;
};

const deserializeAws_restJson1_1LifecyclePolicies = (
  output: any,
  context: __SerdeContext
): Array<LifecyclePolicy> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LifecyclePolicy(entry, context)
  );
};

const deserializeAws_restJson1_1LifecyclePolicy = (
  output: any,
  context: __SerdeContext
): LifecyclePolicy => {
  let contents: any = {
    __type: "LifecyclePolicy",
    TransitionToIA: undefined
  };
  if (output.TransitionToIA !== undefined) {
    contents.TransitionToIA = output.TransitionToIA;
  }
  return contents;
};

const deserializeAws_restJson1_1MountTargetDescription = (
  output: any,
  context: __SerdeContext
): MountTargetDescription => {
  let contents: any = {
    __type: "MountTargetDescription",
    FileSystemId: undefined,
    IpAddress: undefined,
    LifeCycleState: undefined,
    MountTargetId: undefined,
    NetworkInterfaceId: undefined,
    OwnerId: undefined,
    SubnetId: undefined
  };
  if (output.FileSystemId !== undefined) {
    contents.FileSystemId = output.FileSystemId;
  }
  if (output.IpAddress !== undefined) {
    contents.IpAddress = output.IpAddress;
  }
  if (output.LifeCycleState !== undefined) {
    contents.LifeCycleState = output.LifeCycleState;
  }
  if (output.MountTargetId !== undefined) {
    contents.MountTargetId = output.MountTargetId;
  }
  if (output.NetworkInterfaceId !== undefined) {
    contents.NetworkInterfaceId = output.NetworkInterfaceId;
  }
  if (output.OwnerId !== undefined) {
    contents.OwnerId = output.OwnerId;
  }
  if (output.SubnetId !== undefined) {
    contents.SubnetId = output.SubnetId;
  }
  return contents;
};

const deserializeAws_restJson1_1MountTargetDescriptions = (
  output: any,
  context: __SerdeContext
): Array<MountTargetDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MountTargetDescription(entry, context)
  );
};

const deserializeAws_restJson1_1SecurityGroups = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};