cat << 'EOF' > outputs.tf
output "ec2_public_ip" {
  description = "Public IP of the web server"
  value       = aws_instance.web_server.public_ip
}

output "ssh_command" {
  description = "Command to SSH into instance"
  value       = "ssh -i ec2-key.pem ubuntu@${aws_instance.web_server.public_ip}"
}
EOF